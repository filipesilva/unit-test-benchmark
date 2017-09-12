import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1337Component } from './my-comp-1337.component';

describe('MyComp1337Component', () => {
  let component: MyComp1337Component;
  let fixture: ComponentFixture<MyComp1337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
