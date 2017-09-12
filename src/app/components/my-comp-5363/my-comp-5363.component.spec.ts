import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5363Component } from './my-comp-5363.component';

describe('MyComp5363Component', () => {
  let component: MyComp5363Component;
  let fixture: ComponentFixture<MyComp5363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
