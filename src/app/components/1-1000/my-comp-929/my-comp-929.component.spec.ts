import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp929Component } from './my-comp-929.component';

describe('MyComp929Component', () => {
  let component: MyComp929Component;
  let fixture: ComponentFixture<MyComp929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
