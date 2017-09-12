import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4872Component } from './my-comp-4872.component';

describe('MyComp4872Component', () => {
  let component: MyComp4872Component;
  let fixture: ComponentFixture<MyComp4872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
