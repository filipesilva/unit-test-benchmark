import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5032Component } from './my-comp-5032.component';

describe('MyComp5032Component', () => {
  let component: MyComp5032Component;
  let fixture: ComponentFixture<MyComp5032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
