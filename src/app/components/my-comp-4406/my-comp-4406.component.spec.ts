import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4406Component } from './my-comp-4406.component';

describe('MyComp4406Component', () => {
  let component: MyComp4406Component;
  let fixture: ComponentFixture<MyComp4406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
