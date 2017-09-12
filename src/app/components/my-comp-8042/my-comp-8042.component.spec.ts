import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8042Component } from './my-comp-8042.component';

describe('MyComp8042Component', () => {
  let component: MyComp8042Component;
  let fixture: ComponentFixture<MyComp8042Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8042Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
