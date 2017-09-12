import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5272Component } from './my-comp-5272.component';

describe('MyComp5272Component', () => {
  let component: MyComp5272Component;
  let fixture: ComponentFixture<MyComp5272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
