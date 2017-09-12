import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5099Component } from './my-comp-5099.component';

describe('MyComp5099Component', () => {
  let component: MyComp5099Component;
  let fixture: ComponentFixture<MyComp5099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
