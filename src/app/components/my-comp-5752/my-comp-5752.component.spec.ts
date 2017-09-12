import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5752Component } from './my-comp-5752.component';

describe('MyComp5752Component', () => {
  let component: MyComp5752Component;
  let fixture: ComponentFixture<MyComp5752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
