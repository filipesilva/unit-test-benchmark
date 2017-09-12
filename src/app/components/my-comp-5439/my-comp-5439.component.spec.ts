import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5439Component } from './my-comp-5439.component';

describe('MyComp5439Component', () => {
  let component: MyComp5439Component;
  let fixture: ComponentFixture<MyComp5439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
