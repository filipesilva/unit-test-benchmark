import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp748Component } from './my-comp-748.component';

describe('MyComp748Component', () => {
  let component: MyComp748Component;
  let fixture: ComponentFixture<MyComp748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
