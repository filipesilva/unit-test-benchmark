import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3908Component } from './my-comp-3908.component';

describe('MyComp3908Component', () => {
  let component: MyComp3908Component;
  let fixture: ComponentFixture<MyComp3908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
