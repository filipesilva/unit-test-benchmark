import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8972Component } from './my-comp-8972.component';

describe('MyComp8972Component', () => {
  let component: MyComp8972Component;
  let fixture: ComponentFixture<MyComp8972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
