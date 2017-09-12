import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1738Component } from './my-comp-1738.component';

describe('MyComp1738Component', () => {
  let component: MyComp1738Component;
  let fixture: ComponentFixture<MyComp1738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
