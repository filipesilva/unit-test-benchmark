import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4540Component } from './my-comp-4540.component';

describe('MyComp4540Component', () => {
  let component: MyComp4540Component;
  let fixture: ComponentFixture<MyComp4540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
