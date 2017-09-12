import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp410Component } from './my-comp-410.component';

describe('MyComp410Component', () => {
  let component: MyComp410Component;
  let fixture: ComponentFixture<MyComp410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
