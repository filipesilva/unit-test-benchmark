import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5145Component } from './my-comp-5145.component';

describe('MyComp5145Component', () => {
  let component: MyComp5145Component;
  let fixture: ComponentFixture<MyComp5145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
