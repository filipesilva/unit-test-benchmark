import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8121Component } from './my-comp-8121.component';

describe('MyComp8121Component', () => {
  let component: MyComp8121Component;
  let fixture: ComponentFixture<MyComp8121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
