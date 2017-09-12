import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3949Component } from './my-comp-3949.component';

describe('MyComp3949Component', () => {
  let component: MyComp3949Component;
  let fixture: ComponentFixture<MyComp3949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
