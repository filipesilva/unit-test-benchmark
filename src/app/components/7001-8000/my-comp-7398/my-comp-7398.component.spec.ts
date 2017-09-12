import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7398Component } from './my-comp-7398.component';

describe('MyComp7398Component', () => {
  let component: MyComp7398Component;
  let fixture: ComponentFixture<MyComp7398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
