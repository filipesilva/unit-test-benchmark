import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5996Component } from './my-comp-5996.component';

describe('MyComp5996Component', () => {
  let component: MyComp5996Component;
  let fixture: ComponentFixture<MyComp5996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
