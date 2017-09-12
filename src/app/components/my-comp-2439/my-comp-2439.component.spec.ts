import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2439Component } from './my-comp-2439.component';

describe('MyComp2439Component', () => {
  let component: MyComp2439Component;
  let fixture: ComponentFixture<MyComp2439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
