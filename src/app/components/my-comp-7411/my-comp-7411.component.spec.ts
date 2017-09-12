import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7411Component } from './my-comp-7411.component';

describe('MyComp7411Component', () => {
  let component: MyComp7411Component;
  let fixture: ComponentFixture<MyComp7411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
