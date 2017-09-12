import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8327Component } from './my-comp-8327.component';

describe('MyComp8327Component', () => {
  let component: MyComp8327Component;
  let fixture: ComponentFixture<MyComp8327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
