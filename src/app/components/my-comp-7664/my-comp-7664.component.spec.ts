import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7664Component } from './my-comp-7664.component';

describe('MyComp7664Component', () => {
  let component: MyComp7664Component;
  let fixture: ComponentFixture<MyComp7664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
