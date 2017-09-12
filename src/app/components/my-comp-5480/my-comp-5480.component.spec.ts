import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5480Component } from './my-comp-5480.component';

describe('MyComp5480Component', () => {
  let component: MyComp5480Component;
  let fixture: ComponentFixture<MyComp5480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
