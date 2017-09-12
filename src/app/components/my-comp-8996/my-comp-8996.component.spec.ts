import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8996Component } from './my-comp-8996.component';

describe('MyComp8996Component', () => {
  let component: MyComp8996Component;
  let fixture: ComponentFixture<MyComp8996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
