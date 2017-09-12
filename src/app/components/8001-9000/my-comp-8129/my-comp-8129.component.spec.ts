import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8129Component } from './my-comp-8129.component';

describe('MyComp8129Component', () => {
  let component: MyComp8129Component;
  let fixture: ComponentFixture<MyComp8129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
