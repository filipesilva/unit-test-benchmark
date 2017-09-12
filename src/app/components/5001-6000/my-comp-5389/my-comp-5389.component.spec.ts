import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5389Component } from './my-comp-5389.component';

describe('MyComp5389Component', () => {
  let component: MyComp5389Component;
  let fixture: ComponentFixture<MyComp5389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
