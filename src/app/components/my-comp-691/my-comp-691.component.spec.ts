import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp691Component } from './my-comp-691.component';

describe('MyComp691Component', () => {
  let component: MyComp691Component;
  let fixture: ComponentFixture<MyComp691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
