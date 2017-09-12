import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8449Component } from './my-comp-8449.component';

describe('MyComp8449Component', () => {
  let component: MyComp8449Component;
  let fixture: ComponentFixture<MyComp8449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
