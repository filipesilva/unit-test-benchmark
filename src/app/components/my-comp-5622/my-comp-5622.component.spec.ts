import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5622Component } from './my-comp-5622.component';

describe('MyComp5622Component', () => {
  let component: MyComp5622Component;
  let fixture: ComponentFixture<MyComp5622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
