import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3885Component } from './my-comp-3885.component';

describe('MyComp3885Component', () => {
  let component: MyComp3885Component;
  let fixture: ComponentFixture<MyComp3885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
