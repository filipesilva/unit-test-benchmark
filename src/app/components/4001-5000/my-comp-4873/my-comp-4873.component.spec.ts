import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4873Component } from './my-comp-4873.component';

describe('MyComp4873Component', () => {
  let component: MyComp4873Component;
  let fixture: ComponentFixture<MyComp4873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
