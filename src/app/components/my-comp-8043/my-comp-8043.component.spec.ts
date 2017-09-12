import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8043Component } from './my-comp-8043.component';

describe('MyComp8043Component', () => {
  let component: MyComp8043Component;
  let fixture: ComponentFixture<MyComp8043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
