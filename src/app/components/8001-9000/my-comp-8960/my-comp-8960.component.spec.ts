import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8960Component } from './my-comp-8960.component';

describe('MyComp8960Component', () => {
  let component: MyComp8960Component;
  let fixture: ComponentFixture<MyComp8960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
