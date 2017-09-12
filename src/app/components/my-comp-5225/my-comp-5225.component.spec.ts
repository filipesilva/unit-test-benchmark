import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5225Component } from './my-comp-5225.component';

describe('MyComp5225Component', () => {
  let component: MyComp5225Component;
  let fixture: ComponentFixture<MyComp5225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
