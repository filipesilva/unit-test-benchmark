import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5080Component } from './my-comp-5080.component';

describe('MyComp5080Component', () => {
  let component: MyComp5080Component;
  let fixture: ComponentFixture<MyComp5080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
