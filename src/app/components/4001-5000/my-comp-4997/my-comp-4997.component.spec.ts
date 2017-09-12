import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4997Component } from './my-comp-4997.component';

describe('MyComp4997Component', () => {
  let component: MyComp4997Component;
  let fixture: ComponentFixture<MyComp4997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
