import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3175Component } from './my-comp-3175.component';

describe('MyComp3175Component', () => {
  let component: MyComp3175Component;
  let fixture: ComponentFixture<MyComp3175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
