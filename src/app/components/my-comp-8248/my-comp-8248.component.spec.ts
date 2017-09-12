import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8248Component } from './my-comp-8248.component';

describe('MyComp8248Component', () => {
  let component: MyComp8248Component;
  let fixture: ComponentFixture<MyComp8248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
