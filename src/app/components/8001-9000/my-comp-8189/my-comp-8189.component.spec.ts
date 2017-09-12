import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8189Component } from './my-comp-8189.component';

describe('MyComp8189Component', () => {
  let component: MyComp8189Component;
  let fixture: ComponentFixture<MyComp8189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
