import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4583Component } from './my-comp-4583.component';

describe('MyComp4583Component', () => {
  let component: MyComp4583Component;
  let fixture: ComponentFixture<MyComp4583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
