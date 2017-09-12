import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8068Component } from './my-comp-8068.component';

describe('MyComp8068Component', () => {
  let component: MyComp8068Component;
  let fixture: ComponentFixture<MyComp8068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
