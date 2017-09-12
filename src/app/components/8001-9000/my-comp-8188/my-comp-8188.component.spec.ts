import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8188Component } from './my-comp-8188.component';

describe('MyComp8188Component', () => {
  let component: MyComp8188Component;
  let fixture: ComponentFixture<MyComp8188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
