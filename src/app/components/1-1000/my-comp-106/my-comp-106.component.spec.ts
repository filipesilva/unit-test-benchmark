import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp106Component } from './my-comp-106.component';

describe('MyComp106Component', () => {
  let component: MyComp106Component;
  let fixture: ComponentFixture<MyComp106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
