import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4226Component } from './my-comp-4226.component';

describe('MyComp4226Component', () => {
  let component: MyComp4226Component;
  let fixture: ComponentFixture<MyComp4226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
