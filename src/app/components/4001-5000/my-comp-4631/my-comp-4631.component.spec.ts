import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4631Component } from './my-comp-4631.component';

describe('MyComp4631Component', () => {
  let component: MyComp4631Component;
  let fixture: ComponentFixture<MyComp4631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
