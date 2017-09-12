import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5608Component } from './my-comp-5608.component';

describe('MyComp5608Component', () => {
  let component: MyComp5608Component;
  let fixture: ComponentFixture<MyComp5608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
