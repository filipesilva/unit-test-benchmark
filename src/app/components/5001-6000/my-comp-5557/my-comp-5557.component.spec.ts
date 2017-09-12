import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5557Component } from './my-comp-5557.component';

describe('MyComp5557Component', () => {
  let component: MyComp5557Component;
  let fixture: ComponentFixture<MyComp5557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
