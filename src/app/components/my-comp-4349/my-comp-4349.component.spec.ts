import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4349Component } from './my-comp-4349.component';

describe('MyComp4349Component', () => {
  let component: MyComp4349Component;
  let fixture: ComponentFixture<MyComp4349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
