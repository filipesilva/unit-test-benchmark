import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1849Component } from './my-comp-1849.component';

describe('MyComp1849Component', () => {
  let component: MyComp1849Component;
  let fixture: ComponentFixture<MyComp1849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
